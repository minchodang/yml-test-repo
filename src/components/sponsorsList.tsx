import styles from "./sponsorsList.module.css"

export function SponsorsList() {
  return (
    <div className={styles.root}>
      <p className={styles.heading}>SUPPORTED AND BACKED BY</p>

      <div className={styles.logoGroup}>
        <a
          href="https://www.casinoreviews.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/casinoreviews.png" alt="Casino Reviews" />
        </a>
        <a
          href="https://www.beekai.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.beekai.com/marketing/logo/horizontal.svg"
            alt="BEEKAI Form builder"
          />
        </a>
        <a
          href="https://www.route4me.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/route4me.png"
            alt="route4me"
          />
        </a>
      </div>
    </div>
  )
}
