"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./devjourney.module.css";

const Repository = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [readmeContent, setReadmeContent] = useState(null); // Added state for README content
  const pathname = usePathname();
  const router = useRouter();
  const repoOwner = "upayanmazumder";
  const repoName = "DevJourney";

  // Function to fetch repo contents with authentication token
  const fetchRepoContents = async (path = "") => {
    const token = process.env.GITHUB_TOKEN || process.env.GITHUB_TOKEN; // Prioritize a server-side token if available
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
      setError(`Error fetching repository contents: ${err.message}`);
      return null;
    }
  };

  // Function to fetch file content with authentication token
  const fetchFileContent = async (path) => {
    const token = process.env.GITHUB_TOKEN;
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
      setError(`Error fetching file content: ${err.message}`);
    }
  };

  // Function to fetch README.md if exists
  const fetchReadme = async (path) => {
    const contents = await fetchRepoContents(path);
    const readmeFile = contents?.find((item) => item.name.toLowerCase() === "readme.md");

    if (readmeFile) {
      await fetchFileContent(readmeFile.path);
      setReadmeContent(fileContent?.content);  // Set README content
    } else {
      setReadmeContent(null); // No README.md found
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
          fetchReadme(repoPath);  // Fetch README if available
        } else {
          await fetchFileContent(repoPath);
        }
      } catch (err) {
        setError(`Error during data fetching: ${err.message}`);
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
        <h2 className={styles.fileName}>{fileContent.name}</h2>
        <pre className={styles.fileContent}>{fileContent.content}</pre>
      </div>
    );
  };

  const renderReadme = () => {
    if (readmeContent) {
      return (
        <div className={styles.fileViewer}>
          <h2 className={styles.fileName}>README</h2>
          <div className={styles.fileContent} dangerouslySetInnerHTML={{ __html: readmeContent }} />
        </div>
      );
    }
    return null;
  };

  const renderBreadcrumb = () => {
    const pathSegments = pathname
      .replace("/devjourney", "")
      .split("/")
      .filter(Boolean);
    
    const breadcrumbItems = pathSegments.map((segment, index) => {
      const path = `/devjourney/${pathSegments.slice(0, index + 1).join("/")}`;
      const decodedSegment = decodeURIComponent(segment); // Decode the segment for display
      
      return (
        <span key={path}>
          <button className={styles.breadcrumbLink} onClick={() => router.push(path)}>
            {decodedSegment}
          </button>
          {index < pathSegments.length - 1 && " / "}
        </span>
      );
    });
  
    return (
      <div className={styles.breadcrumb}>
        <button className={styles.breadcrumbLink} onClick={() => router.push("/devjourney")}>
          Home
        </button>
        {breadcrumbItems.length > 0 && " / "}
        {breadcrumbItems}
      </div>
    );
  };
  

  return (
    <div className={styles.container}>
      {renderBreadcrumb()}
      {renderFileContent()}
      {renderContents()}
      {renderReadme()}
    </div>
  );
};

export default Repository;
