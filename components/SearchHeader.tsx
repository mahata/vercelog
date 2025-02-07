import { liteClient as algoliasearch } from "algoliasearch/lite";
import type { Hit } from "instantsearch.js";
import type React from "react";
import { Highlight, Hits, InstantSearch, SearchBox, useSearchBox } from "react-instantsearch";
import "instantsearch.css/themes/satellite.css";
import styles from "@/components/SearchHeader.module.scss";
import Link from "next/link";

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? "", process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY ?? "");

type HitType = Hit<{
  title: string;
  content: string;
  path: string;
  date: string;
}>;

const HitComponent = ({ hit }: { hit: HitType }) => {
  return (
    <Link href={hit.path}>
      <article>
        <h2 className={styles.title}>
          <Highlight attribute="title" hit={hit} />
        </h2>
        <p className={styles.content}>
          <Highlight attribute="content" hit={hit} />
        </p>
      </article>
    </Link>
  );
};

function HitsWithQuery({ hitComponent }: { hitComponent: typeof HitComponent }) {
  const { query, refine } = useSearchBox();

  return query ? (
    <div
      onClick={() => refine("")}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          refine("");
        }
      }}
    >
      <Hits hitComponent={hitComponent} />
    </div>
  ) : null;
}

export default function SearchHeader() {
  return (
    <div className="search-header">
      <InstantSearch indexName="articles" searchClient={searchClient} routing={true}>
        <div className="search-container">
          <div className={styles.customSearchbox}>
            <SearchBox />
          </div>
          <HitsWithQuery hitComponent={HitComponent} />
        </div>
      </InstantSearch>
    </div>
  );
}
