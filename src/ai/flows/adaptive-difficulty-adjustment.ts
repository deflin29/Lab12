'use server';

/**
 * @fileOverview An AI agent that adjusts the difficulty of games based on student performance and recommends new levels.
 *
 * - adaptiveDifficultyAdjustment - A function that handles the adaptive difficulty adjustment and level recommendation process.
 * - AdaptiveDifficultyInput - The input type for the adaptiveDifficultyAdjustment function.
 * - AdaptiveDifficultyOutput - The return type for the adaptiveDifficultyAdjustment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptiveDifficultyInputSchema = z.object({
  studentId: z.string().describe('The unique identifier of the student.'),
  gameId: z.string().describe('The unique identifier of the game.'),
  levelId: z.string().describe('The unique identifier of the level.'),
  score: z.number().describe('The score achieved by the student in the level.'),
  timeTaken: z.number().describe('The time taken by the student to complete the level in seconds.'),
  attempts: z.number().describe('The number of attempts the student took to complete the level.'),
});
export type AdaptiveDifficultyInput = z.infer<typeof AdaptiveDifficultyInputSchema>;

const AdaptiveDifficultyOutputSchema = z.object({
  adjustedDifficulty: z
    .string()
    .describe(
      'The adjusted difficulty level for the student, which can be Easy, Medium, or Hard.'
    ),
  recommendedLevels: z
    .array(z.string())
    .describe('A list of recommended level IDs for the student.'),
});
export type AdaptiveDifficultyOutput = z.infer<typeof AdaptiveDifficultyOutputSchema>;

export async function adaptiveDifficultyAdjustment(
  input: AdaptiveDifficultyInput
): Promise<AdaptiveDifficultyOutput> {
  return adaptiveDifficultyFlow(input);
}

const adaptiveDifficultyPrompt = ai.definePrompt({
  name: 'adaptiveDifficultyPrompt',
  input: {schema: AdaptiveDifficultyInputSchema},
  output: {schema: AdaptiveDifficultyOutputSchema},
  prompt: `You are an AI tutor that analyzes student performance in educational games and adjusts the difficulty accordingly. You also recommend new levels based on their progress.

Analyze the following student performance data:

Student ID: {{{studentId}}}
Game ID: {{{gameId}}}
Level ID: {{{levelId}}}
Score: {{{score}}}
Time Taken: {{{timeTaken}}} seconds
Attempts: {{{attempts}}}

Based on this data, determine the appropriate difficulty level for the student (Easy, Medium, or Hard) and recommend up to 3 new levels that would be suitable for them.

Difficulty Adjustment:
- If the student scores high, completes the level quickly, and with few attempts, increase the difficulty.
- If the student scores low, takes a long time, and requires many attempts, decrease the difficulty.
- Otherwise, maintain the current difficulty.

Recommended Levels:
- Suggest levels that align with the student's current progress and the game's progression.
- Ensure that the recommended levels provide a balanced learning experience.

Please provide the adjusted difficulty and recommended levels in the following JSON format:

{{output}}`,
});

const adaptiveDifficultyFlow = ai.defineFlow(
  {
    name: 'adaptiveDifficultyFlow',
    inputSchema: AdaptiveDifficultyInputSchema,
    outputSchema: AdaptiveDifficultyOutputSchema,
  },
  async input => {
    const {output} = await adaptiveDifficultyPrompt(input);
    return output!;
  }
);
