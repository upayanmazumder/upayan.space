"use client";

import { useEffect, useState } from "react";
import styles from './devjourney.module.css';

const Repository = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const repoOwner = "upayanmazumder";
  const repoName = "DevJourney";

  const fetchRepoContents = async (path = "") => {
    try {
      const token = process.env.GITHUB_TOKEN;
      const headers = token ? { Authorization: `token ${token}` } : {};
      const response = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`,
        { headers }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch repository data");
      }

      const result = await response.json();
      return result;
    } catch (err) {
      setError(err.message);
      return [];
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const contents = await fetchRepoContents();
      setData(contents);
      setLoading(false);
    })();
  }, []);

  const renderContents = (contents) => {
    return (
      <ul className={styles.fileList}>
        {contents.map((item) => (
          <li key={item.sha} className={styles.fileItem}>
            {item.type === "file" ? (
              <a className={styles.fileLink} href={item.html_url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            ) : (
              <div className={styles.folderItem}>
                <span className={styles.folderName}>{item.name} (Folder)</span>
                <button
                  className={styles.viewFolderBtn}
                  onClick={async () => {
                    const folderContents = await fetchRepoContents(item.path);
                    setData(folderContents);
                  }}
                >
                  View Folder
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.repoTitle}>Repository: {repoName}</h1>
      {renderContents(data)}
    </div>
  );
};

export default Repository;
