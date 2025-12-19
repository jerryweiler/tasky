import { json } from '@sveltejs/kit';

export async function GET() {
	return json([{ id: 1 }, { id: 2 }]);
}
