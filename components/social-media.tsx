import { HugeiconsIcon } from '@hugeicons/react';
import { GithubIcon, Linkedin02Icon, Mail01Icon  } from '@hugeicons/core-free-icons';

const socials = [
  { label: "GitHub", href: "https://github.com/Freyzzer", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/freyzzer-george-valencia-murillo-b891951aa/", icon: Linkedin02Icon },
  { label: "Email", href: "mailto:freyzzergvm12@gmail.com", icon: Mail01Icon },
]

export default function SocialMedia() {
    return(
        <div className="fixed bottom-0 left-20 flex flex-col items-center gap-5 after:content-[''] after:block after:w-px after:h-28 after:bg-muted-foreground max-[799px]:hidden">
            <ul className="flex flex-col gap-4">
                {socials.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-muted-foreground transition-all duration-300 hover:text-foreground hover:-translate-y-1"
                        aria-label={social.label}
                    >
                        <HugeiconsIcon
                            icon={social.icon}
                            size={20}
                            color="currentColor"
                            strokeWidth={1.5}
                            />
                    </a>
                ))}
            </ul>
        </div>
    )
}