import { forwardRef } from 'react'
import { cn } from '~/lib/utils'

export const TypographyH1 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
      >
        {children}
      </h1>
    )
  }
)
TypographyH1.displayName = 'TypographyH1'

export const TypographyH2 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        {...props}
        className={cn(
          'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
          className
        )}
      >
        {children}
      </h2>
    )
  }
)
TypographyH2.displayName = 'TypographyH2'

export const TypographyH3 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3 ref={ref} {...props} className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>
        {children}
      </h3>
    )
  }
)
TypographyH3.displayName = 'TypographyH3'

export const TypographyH4 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <h4 ref={ref} {...props} className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}>
        {children}
      </h4>
    )
  }
)
TypographyH4.displayName = 'TypographyH4'

export const TypographyP = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
        {children}
      </p>
    )
  }
)
TypographyP.displayName = 'TypographyP'

export const TypographyBlockquote = forwardRef<HTMLQuoteElement, React.BlockquoteHTMLAttributes<HTMLQuoteElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <blockquote ref={ref} {...props} className={cn('mt-6 border-l-2 pl-6 italic', className)}>
        {children}
      </blockquote>
    )
  }
)
TypographyBlockquote.displayName = 'TypographyBlockquote'

export const TypographyInlineCode = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        {...props}
        className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}
      >
        {children}
      </code>
    )
  }
)
TypographyInlineCode.displayName = 'TypographyInlineCode'

export const TypographyLead = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn('text-xl text-muted-foreground', className)}>
        {children}
      </p>
    )
  }
)
TypographyLead.displayName = 'TypographyLead'

export const TypographyLarge = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn('text-lg font-semibold', className)}>
        {children}
      </div>
    )
  }
)
TypographyLarge.displayName = 'TypographyLarge'

export const TypographySmall = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <small ref={ref} {...props} className={cn('text-sm font-medium leading-none', className)}>
        {children}
      </small>
    )
  }
)
TypographySmall.displayName = 'TypographySmall'

export const TypographyMuted = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn('text-sm text-muted-foreground', className)}>
        {children}
      </p>
    )
  }
)
TypographyMuted.displayName = 'TypographyMuted'
