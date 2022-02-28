import styles from '../styles/Gallery.module.scss';
import DefaultLayout from '../Layout';

  
  function Gallery() {
   

    return (
        <DefaultLayout>
            <div className={styles.subtitle}>
                <h3> Gallery</h3>
            </div>

            <div className={styles.wrapper}>
                <img src="https://images.unsplash.com/photo-1517928260182-5688aead3066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width="250" height="300"/>

                <img src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width="250" height="300"/>

                <img src="https://images.unsplash.com/photo-1550497339-b7f0d3b3ce33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width="250" height="300"/>

                <img src="https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" width="250" height="300" />

                <img src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80" width="250" height="300" />

                <img src="https://images.unsplash.com/photo-1525340581945-d5e2b09641c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" width="250" height="300" />

                <img src="https://images.unsplash.com/photo-1570579899175-c24691d9b8df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" width="250" height="300" />

                <img src="https://images.unsplash.com/photo-1619179394313-bdede7336b14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" width="250" height="300" />

            </div>
            </DefaultLayout>
);
    }


export default Gallery;