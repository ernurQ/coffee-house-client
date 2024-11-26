import { revalidateTag } from 'next/cache'
import { NextRequest } from 'next/server'

export async function PATCH(request: NextRequest) {
	const tag = request.nextUrl.searchParams.get('tag')
	if (!tag) throw new Error(`tag param is required`)
	revalidateTag(tag)
	return Response.json({ revalidated: true, now: Date.now() })
}
