
import "dotenv/config";
import { MossClient } from "@moss-dev/moss";
import skillData from "../src/data/skillData.js";

const projectId = process.env.MOSS_PROJECT_ID;
const projectKey = process.env.MOSS_PROJECT_KEY;

if (!projectId || !projectKey) {
  throw new Error(
    "Missing MOSS_PROJECT_ID or MOSS_PROJECT_KEY in your .env file."
  );
}

const documents = skillData.map((item) => ({
  id: String(item.id),
  text: `
Skill: ${item.skill}
Category: ${item.category}
Level: ${item.level}
Description: ${item.description}
Prerequisites: ${item.prerequisites.join(", ")}
Next Skills: ${item.nextSkills.join(", ")}
  `.trim(),
}));

const client = new MossClient(projectId, projectKey);

await client.createIndex("skillquest", documents);

console.log("✅ AI SkillQuest Moss index created successfully!");
console.log(`📚 Indexed ${documents.length} SkillQuest documents.`);