export { default } from 'next-auth/middleware'

export const config = {
    // *:  zero or more
    // +:  one or more
    // ?:  zero or one
    matcher: ["/users/:id*"]
}

// Nothing bro, just chill.
// It's just a normal conversation and nothing else.