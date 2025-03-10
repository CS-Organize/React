import classes from './Page.module.css';

export default function Page() {
  return (
    <div className={classes.wrap}>
      <header className={classes.header}></header>
      <main className={classes.main}></main>
      <footer className={classes.footer}></footer>
    </div>
  );
}
