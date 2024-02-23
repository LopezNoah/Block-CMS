import SiteMaster from "../../components/ZoneEditor.astro?raw";
import FullWidth from "../../layouts/FullWidth.astro?raw";
import type { APIRoute } from "astro";

//This file would be used to fetch the Zones from specified layouts.

function extractSlots(htmls: string[]): Array<string> {
  const slotRegex = /<Fragment\s+slot="([^"]+)"><slot\s+name="([^"]+)"><\/slot><\/Fragment>|<RockZone\s+name="([^"]+)">/g;
  const slots: Record<string, string> = {};

  htmls.forEach(html => {
    let match;
    while ((match = slotRegex.exec(html)) !== null) {
      const slotName = match[1] || match[3];
      const slotContent = match[0]; // Entire matched content including the tags and content
      if (slotName && !slots[slotName]) {
        slots[slotName] = slotContent;
      }
    }
  });

  return Object.keys(slots);
}

const slots = extractSlots([FullWidth, SiteMaster]);

console.log('List of slots:', slots);

export const fetchZones = () => {
  return slots;
}

export const GET: APIRoute = ({ params, request }) => {
    return new Response(JSON.stringify(slots));
}