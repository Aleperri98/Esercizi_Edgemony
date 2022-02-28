
import styles from '../styles/Home.module.scss'
import DefaultLayout from '../Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <DefaultLayout>
        <h3>Homepage</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, error? Iusto, nulla. Est nesciunt magni dolorum commodi, ad neque, tenetur quis officiis labore sed magnam eius fugiat, incidunt quisquam numquam.</p>
          <p>Per visualizzare le foto fai click su Gallery!</p>
      </DefaultLayout>
    </div>
  )
}
