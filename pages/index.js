import Link from "next/link";
// import useFetch from "../hooks/useFetch";
import PageLayout from "../components/PageLayout";
import { API_KEY } from "../config/config";
// import Image from "next/image"; // Image Optimization

export default function Home({ articles }) {
  return (
    <PageLayout>
      <h2 className="pb-2">News App</h2>
      <div className="flex flex-wrap justify-between">
        <Link href="/">Previous page</Link>
        <Link href="/">Next page</Link>
      </div>
      <div className="flex flex-wrap justify-between">
        {articles.length === 0 && <p>No data to show...</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <article
              key={index}
              className="w-full lg:w-[49%] xl:w-[32%] rounded"
            >
              <picture className="flex items-center justify-center">
                <img
                  src={article.urlToImage}
                  alt={`Image to article ${article.title}`}
                />
              </picture>
              <h2 className="pt-2 mb-0">
                <a href={article.url} target="_blank" rel="noreferrer">
                  {article.title}
                </a>
              </h2>

              <p>
                <small className="pb-3 text-[14px]">
                  {new Date(article.publishedAt).toLocaleString()}
                </small>
              </p>
              <p>{article.description}</p>
            </article>
          ))}
      </div>
    </PageLayout>
  );
}

// N requests -> se ejecuta 1 vez en build time (o para refrescar la pagina)
// export async function getStaticProps() {}

// N requets -> se ejecuta N veces
// para datosd que necesitas que sean MUY live
// tiene demasiados datos dinamicos
export async function getServerSideProps(context) {
  console.log(context);
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=co&apiKey=${API_KEY}`
  );
  const { articles } = await response.json();

  return {
    props: { articles },
  };
}
