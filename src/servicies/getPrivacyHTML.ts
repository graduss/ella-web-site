'use server';

import { readFile } from "fs/promises";
import { join } from "path";

export async function getPrivacyHTML(): Promise<string> {
  const html = await readFile( join(process.cwd(), 'static', 'privacy.html'), { encoding: 'utf8' });

  return html;
}