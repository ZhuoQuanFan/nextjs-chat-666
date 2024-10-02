import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to whynotme. I'm an AI Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is an open source AI chatbot app template built with{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>, the{' '}
          <ExternalLink href="https://sdk.vercel.ai">
            Vercel AI SDK
          </ExternalLink>
          , and{' '}
          <ExternalLink href="https://vercel.com/storage/kv">
            Vercel KV
          </ExternalLink>
          .
        </p>
        <p>You can find this vercel project in my {' '}.
          <ExternalLink href="https://github.com/ZhuoQuanFan"> Github</ExternalLink> And You can visit my blog{'  '}
          <ExternalLink href="https://jasonfzq.top">Jason's Blog</ExternalLink> and comment asap.
        </p>
        <p>
          I have bought 1 dollar tokens for all users, you can register and try my AI chatbot.Feel free to ask me anything!
        </p>
      </div>
    </div>
  )
}
