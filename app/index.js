import { StyleSheet, Text, View, ScrollView } from "react-native"
import QuestionListItem from "../src/components/QuestionListItem"
import Questions from "../Data/Question.json"
const questions = Questions.questions

export default function Page() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {questions.map((question) => (
          <QuestionListItem Question={question}></QuestionListItem>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
})
