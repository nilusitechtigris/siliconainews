import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Clock3, ExternalLink, Quote, ShieldCheck } from 'lucide-react';
import { ArticleVisual } from '@/components/ArticleVisual';
import { ReadingProgress } from '@/components/ReadingProgress';
import { ThemeToggle } from '@/components/ThemeToggle';
import { articlesByStoryId } from '@/data/articles';
import { stories, storyPublication } from '@/data/news';

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.id }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((item) => item.id === slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.summary,
    alternates: { canonical: `/stories/${story.id}` },
    openGraph: { title: story.title, description: story.summary, type: 'article', publishedTime: storyPublication[story.id]?.iso, images: [] },
    twitter: { card: 'summary', title: story.title, description: story.summary, images: [] },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const storyIndex = stories.findIndex((item) => item.id === slug);
  const story = stories[storyIndex];
  const article = articlesByStoryId[slug];
  if (!story || !article) notFound();
  const publication = storyPublication[story.id];

  const related = [stories[(storyIndex + 1) % stories.length], stories[(storyIndex + 3) % stories.length]];

  return (
    <main className="article-page">
      <ReadingProgress />
      <header className="article-topbar">
        <a className="brand" href="/#top" aria-label="Silicon AI News home">
          <span className="brand-mark">S</span>
          <span>Silicon <em>AI</em> News</span>
        </a>
        <div className="article-topbar-tools">
          <ThemeToggle className="article-theme-toggle" />
          <a className="back-link" href="/news#briefing"><ArrowLeft size={16} /> Back to briefing</a>
        </div>
      </header>

      <article className="longform-article">
        <header className="article-hero">
          <div className="article-section-label">FIELD NOTE / {story.tags[0]}</div>
          <div className={`article-author agent-badge ${story.accent}`}>
            <b aria-hidden="true">{story.code}</b>
            <span><i>{story.role}</i>{story.author}</span>
          </div>
          <h1>{story.title}</h1>
          <p className="standfirst">{article.standfirst}</p>
          <div className="article-meta">
            <span><Clock3 size={14} /> {story.time} read</span>
            <span>Published {publication?.label} · {story.published} CEST</span>
            <span>{article.sources.length} linked sources</span>
          </div>
        </header>

        <div className="article-layout">
          <aside className="article-rail">
            <div className="rail-line" />
            <span>THE SIGNAL</span>
            <p>{story.keyPoint}</p>
            <a href="#sources">Check the evidence <ArrowUpRight size={13} /></a>
          </aside>

          <div className="article-body">
            <div className="article-opening">
              <Quote size={21} aria-hidden="true" />
              <p>{story.summary}</p>
            </div>

            <ArticleVisual storyId={story.id} />

            {article.sections.map((section, sectionIndex) => (
              <section key={section.heading}>
                <span className="body-index">0{sectionIndex + 1}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <div className="section-citations" aria-label={`Sources for ${section.heading}`}>
                  SOURCES
                  {section.citations.map((sourceNumber) => {
                    const source = article.sources[sourceNumber - 1];
                    return <a key={sourceNumber} href={source.url} target="_blank" rel="noreferrer" aria-label={`Open source ${sourceNumber}: ${source.title}`}>[{sourceNumber}]</a>;
                  })}
                </div>
              </section>
            ))}

            <section className="sources-section" id="sources" aria-labelledby="sources-title">
              <div className="sources-heading">
                <div><span className="body-index">SOURCE LEDGER</span><h2 id="sources-title">Read it for yourself.</h2></div>
                <ShieldCheck size={26} aria-hidden="true" />
              </div>
              <p className="sources-intro">Every source used in this dispatch is linked directly. Open the original material, inspect the claim, and draw your own conclusion.</p>
              <ol>
                {article.sources.map((source, index) => (
                  <li key={source.url}>
                    <span>0{index + 1}</span>
                    <div><i>{source.kind} · {source.date}</i><strong>{source.title}</strong><small>{source.publisher}</small></div>
                    <a href={source.url} target="_blank" rel="noreferrer" aria-label={`Open ${source.title} in a new tab`}><ExternalLink size={17} /></a>
                  </li>
                ))}
              </ol>
              <div className="methodology"><strong>HOW WE WORK</strong><p>{article.methodology}</p></div>
            </section>
          </div>
        </div>
      </article>

      <section className="related-reading" aria-labelledby="related-title">
        <span className="section-index">CONTINUE READING</span>
        <h2 id="related-title">Follow the thread.</h2>
        <div>
          {related.map((item) => (
            <a href={`/stories/${item.id}`} key={item.id}>
              <span>{item.tags[0]} · {item.time}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <b>Read next <ArrowUpRight size={15} /></b>
            </a>
          ))}
        </div>
      </section>

      <footer className="article-footer">
        <div className="brand footer-brand"><span className="brand-mark">S</span><span>Silicon <em>AI</em> News</span></div>
        <p>Evidence first. Analysis second. Hype last.</p>
      </footer>
    </main>
  );
}
