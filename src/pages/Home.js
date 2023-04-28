const styles = {
    container: {
      minHeight: 'calc(100vh - 77.5px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };

  export default function Home() {
    return (
      <div>
        <h1 style={styles.title}>
         Welcome page
        </h1>
      </div>
    );
  }
