import { StyleSheet, Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useBooksContext } from "../../../context/BooksContext";

//THEMED COMPONENTS
import Spacer from "../../../components/Spacer";
import ThemeText from "../../../components/ThemeText";
import ThemedView from "../../../components/ThemedView";
import ThemedCard from "../../../components/ThemedCard";
import ThemedLoader from "../../../components/ThemedLoader";
import ThemedButton from "../../../components/ThemedButton";
import { Colors } from "../../../constants/colors";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useLocalSearchParams();
  const router = useRouter()

  const { fetchBookById, deleteBook } = useBooksContext();

  const handleDelete = async() => {
    await deleteBook(id)
    setBook(null)
    router.replace('/books')
  }

  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookById(id);
      setBook(bookData);
    }
    loadBook();
  }, [id]);

  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemeText style={styles.title}>{book?.title}</ThemeText>
        <ThemeText>Written by {book?.author}</ThemeText>
        <Spacer />

        <ThemeText title={true}>Book description:</ThemeText>
        <Spacer height={10} />

        <ThemeText>{book?.description}</ThemeText>
      </ThemedCard>
      <ThemedButton style={styles.delete} onPress={handleDelete}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Delete Book</Text>
      </ThemedButton>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
  delete: {
    marginTop: 10,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: "center",
  },
});
