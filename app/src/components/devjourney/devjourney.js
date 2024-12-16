"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BsFileEarmark, BsFolder, BsGithub } from "react-icons/bs";
import { marked } from "marked";

const Repository = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [readmeContent, setReadmeContent] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const repoOwner = "upayanmazumder";
  const repoName = "DevJourney";

  const fetchRepoContents = async (path = "") => {
    const token = process.env.GITHUB_TOKEN || process.env.GITHUB_TOKEN;
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

  const fetchReadme = async (path) => {
    const contents = await fetchRepoContents(path);
    const readmeFile = contents?.find((item) => item.name.toLowerCase() === "readme.md");

    if (readmeFile) {
      await fetchFileContent(readmeFile.path);
      const parsedMarkdown = marked(fileContent?.content || ""); // Parse the markdown
      setReadmeContent(parsedMarkdown);
    } else {
      setReadmeContent(null);
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
          fetchReadme(repoPath);
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
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <ul>
        {data.map((item) => (
          <li key={item.sha}>
            <button

              onClick={() => handleItemClick(item)}
            >
              {item.type === "dir" ? (
                <BsFolder />
              ) : (
                <BsFileEarmark />
              )}
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  const renderFileContent = () => {
    if (!fileContent) return null;

    return (
      <div>
        <h2>{fileContent.name}</h2>
        {fileContent.name.endsWith(".md") ? (
          <div

            dangerouslySetInnerHTML={{ __html: marked(fileContent.content) }}
          />
        ) : (
          <pre>{fileContent.content}</pre>
        )}
      </div>
    );
  };

  const renderReadme = () => {
    if (readmeContent) {
      return (
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: readmeContent }}
          />
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
      const decodedSegment = decodeURIComponent(segment);

      return (
        <span key={path}>
          <button

            onClick={() => router.push(path)}
          >
            {decodedSegment}
          </button>
          {index < pathSegments.length - 1 && " / "}
        </span>
      );
    });

    return (
      <div>
        <button

          onClick={() => router.push("/devjourney")}
        >
          Home
        </button>
        {breadcrumbItems.length > 0 && " / "}
        {breadcrumbItems}
      </div>
    );
  };

  const renderGitHubButton = () => {
    const repoPath = pathname.replace("/devjourney", "").replace(/^\//, "");
    const githubUrl = `https://github.com/${repoOwner}/${repoName}/tree/main/${repoPath}`;
    return (
      <div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"

        >
          <BsGithub /> View this page on GitHub
        </a>
      </div>
    );
  };

  return (
    <div>
      {renderBreadcrumb()}
      {renderGitHubButton()}
      {renderFileContent()}
      {renderContents()}
      {renderReadme()}
    </div>
  );
};

export default Repository;