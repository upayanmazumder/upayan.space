"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./devjourney.module.css";

const Repository = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const repoOwner = "upayanmazumder";
  const repoName = "DevJourney";

  const fetchRepoContents = async (path = "") => {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    const headers = token ? { Authorization: `token ${token}` } : {};

    try {
      const response = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`,
        { headers }
      );

      if (!response.ok) throw new Error("Failed to fetch repository contents");

      const result = await response.json();
      return result;
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  const fetchFileContent = async (path) => {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    const headers = token ? { Authorization: `token ${token}` } : {};

    try {
      const response = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`,
        { headers }
      );

      if (!response.ok) throw new Error("Failed to fetch file content");

      const result = await response.json();

      if (result.type === "file") {
        const decodedContent = atob(result.content);
        setFileContent({ name: result.name, content: decodedContent });
      } else {
        setFileContent(null);
        throw new Error("Path is not a file");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const repoPath = pathname.replace("/devjourney", "").replace(/^\//, "");

      try {
        const contents = await fetchRepoContents(repoPath);
        if (Array.isArray(contents)) {
          setData(contents);
          setFileContent(null);
        } else {
          await fetchFileContent(repoPath);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (pathname) fetchData();
  }, [pathname]);

  const handleItemClick = (item) => {
    const newPath = `/devjourney/${item.path}`;
    router.push(newPath);
  };

  const renderContents = () => {
    if (loading) return <p className={styles.loading}>Loading...</p>;
    if (error) return <p className={styles.error}>Error: {error}</p>;

    const items = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      items.push(
        <li key={item.sha} className={styles.fileItem}>
          <button
            className={styles.fileLink}
            onClick={() => handleItemClick(item)}
          >
            {item.name}
          </button>
        </li>
      );
    }
    return <ul className={styles.fileList}>{items}</ul>;
  };

  const renderFileContent = () => {
    if (!fileContent) return null;

    return (
      <div className={styles.fileViewer}>
        <h2 className={styles.fileName}>Viewing: {fileContent.name}</h2>
        <pre className={styles.fileContent}>{fileContent.content}</pre>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.repoTitle}>Repository: {repoName}</h1>
      {renderContents()}
      {renderFileContent()}
    </div>
  );
};

export default Repository;
