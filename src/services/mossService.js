
import skillData from "../data/skillData";

// Moss retrieval service
// This layer will handle semantic retrieval for AI SkillQuest.

export async function searchSkills(query) {
  if (!query || !query.trim()) {
    return [];
  }

  const normalizedQuery = query.toLowerCase();

  // Temporary local retrieval fallback.
  // We will replace this with the actual Moss search call
  // after verifying the Moss SDK configuration.

  const results = skillData.filter((item) => {
    const searchableText = `
      ${item.skill}
      ${item.category}
      ${item.level}
      ${item.description}
      ${item.nextSkills.join(" ")}
    `.toLowerCase();

    return normalizedQuery
      .split(/\s+/)
      .some((word) => word.length > 2 && searchableText.includes(word));
  });

  return results;
}

