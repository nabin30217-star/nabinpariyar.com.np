export async function getGithubRepoCount(username: string): Promise<number> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!res.ok) {
      console.error(`GitHub API error: ${res.status} ${res.statusText}`);
      return 0; // Fallback
    }

    const data = await res.json();
    return data.public_repos || 0;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return 0; // Fallback
  }
}
