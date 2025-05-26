import { StyleSheet, FlatList, Pressable } from "react-native";
import { useBooksContext } from "../../context/BooksContext";
import { Colors } from "../../constants/colors";

import Spacer from "../../components/Spacer";
import ThemeText from "../../components/ThemeText";
import ThemedView from "../../components/ThemedView";
import ThemedCard from "../../components/ThemedCard";
import { useRouter } from "expo-router";

const books = () => {
  const { books: Books } = useBooksContext();
  const router = useRouter()

  return (
    <ThemedView safe={true} style={styles.container}>
      <Spacer />
      <ThemeText title={true} style={styles.heading}>
        Your Reading List
      </ThemeText>

      <Spacer />

      <FlatList
        data={Books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/books/${item.$id}`)}>
            <ThemedCard style={styles.card}>
              <ThemeText style={styles.title}>{item.title}</ThemeText>
              <ThemeText>Written by {item.author}</ThemeText>
            </ThemedCard>
          </Pressable>
        )}
      />
    </ThemedView>
  );
};

export default books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: '100%'
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  list: {
    marginTop: 40,
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
