import {CalendarIcon, ArrowRightIcon} from "lucide-react"

interface Article {
    title: string
    date: string
    author: string
    image?: string
    link: string
}

interface ArticleCardProps {
    article: Article
}

export default function ArticleCard({article}: ArticleCardProps) {
    const colors = [
        "from-blue-500 to-indigo-600",
        "from-emerald-500 to-green-600",
        "from-violet-500 to-purple-600",
        "from-amber-500 to-orange-600",
        "from-rose-500 to-pink-600",
        "from-cyan-500 to-sky-600",
    ]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    return (
        <div
            className="group relative border border-gray-200 rounded-xl flex flex-col h-full">
            <div className="relative w-full h-24">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                    src={article.image || `/placeholder.svg?height=200&width=400`}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-t-xl"
                />
                <div className="absolute bottom-3 left-3 z-20 flex items-center">
                    <div
                        className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2 overflow-hidden border-2 border-white">
                        <span className="text-xs font-bold text-gray-700">{article.author.charAt(0)}</span>
                    </div>
                    <span className="text-white text-sm font-medium">{article.author}</span>
                </div>
            </div>

            <div className="p-5 flex-grow flex flex-col">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                    <CalendarIcon className="w-3 h-3 mr-1"/>
                    <span>{article.date}</span>
                </div>
                <h2 className="text-xl font-semibold` mb-3 text-gray-800 dark:text-gray-50 line-clamp-2">{article.title}</h2>
                <div className="mt-auto pt-2">
                    <a href={article.link} target="_blank" rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-[#ff6d0a] transition-colors">
                        Lire l'article
                        <ArrowRightIcon
                            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
