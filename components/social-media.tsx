import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const socials = [
  { label: "GitHub", href: "https://github.com/Freyzzer", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/freyzzer-george-valencia-murillo-b891951aa/", icon: Linkedin },
  { label: "Email", href: "mailto:freyzzergvm12@gmail.com", icon: Mail },
]

export default function SocialMedia() {
    return(
        <div className="fixed bottom-0 left-20 flex flex-col items-center gap-5 after:content-[''] after:block after:w-px after:h-28 after:bg-muted-foreground">
            <ul className="flex flex-col gap-4">
                {socials.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:-translate-y-1"
                        aria-label={social.label}
                    >
                        <social.icon className="h-5 w-5" />
                    </a>
                ))}
            </ul>
        </div>
    )
}