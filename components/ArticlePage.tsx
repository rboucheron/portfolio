import ArticleCard from "@/components/ArticleCard";

const articles = [
    {
        title: "Le JavaScript et ses runtimes",
        date: "15 décembre 2024",
        author: "Romain Lanz",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2274&auto=format&fit=crop",
        link: "https://romainlanz.com/articles/le-javascript-et-ses-runtimes"

    },
    {
        title: "Le monde dépend d'un langage informatique que plus personne ne connaît",
        date: "3 mars 2025",
        author: "Underscore_",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        link: "https://www.youtube.com/watch?v=R2B2QetWGag&t=370s"
    },
    {
        title: "FrankenPHP - Le serveur PHP surpuissant écrit en Go",
        date: "3 mai 2024",
        author: "Korben",
        image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=2070&auto=format&fit=crop",
        link: "https://korben.info/frankenphp-serveur-php-surpuissant-kevin-dunglas.html"
    },
]

export default function ArticlePage() {
    return (
        <main className=" 2xl:mx-10 2xl:px-44 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-20">
                {articles.map((article, index) => (
                    <ArticleCard key={index} article={article}/>
                ))}
            </div>
        </main>
    )
}
