import { useEffect } from "react";
import { useState } from "react";

export const DynamicDataInput = () => {
  const [userInput, setUserInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userInput.length > 2) {
      fetchPosts();
    }
  }, [userInput]);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?title_like=" + userInput
      );
      if (!response.ok) {
        throw new Error("Algo salió mal");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Lista de Posts</h1>

      <input
        className="border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.id} - {post.title}
            </li>
          ))}
        </ul>
      )}

      {posts.length === 0 && <p>Posts encontrados: {posts.length}</p>}
      {error && <p>Error: {error.message}</p>}
    </>
  );
};
