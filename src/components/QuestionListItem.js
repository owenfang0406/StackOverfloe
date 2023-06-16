import { View, Text, StyleSheet } from "react-native"
import React from "react"
import questions from "../../Data/Question.json"
const Questions = questions.questions[1]

export default function QuestionListItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {Questions.score} votes • 2 {Questions.answer_count} •{" "}
        {Questions.view_count} views
      </Text>
      <Text style={styles.title}>{Questions.title}</Text>
      <Text numberOfLines={2} style={styles.body}>
        {Questions.body_markdown}
      </Text>
      <View style={styles.tags}>
        {Questions.tags.map((tag) => (
          <Text style={styles.tag} key={tag}>
            {tag}
          </Text>
        ))}
        <Text style={styles.time}>
          asked {new Date(Questions.creation_date).toDateString()}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: "Lightgray",
  },
  stats: {
    fontSize: 12,
  },
  title: {
    color: "#0063bf",
    marginVertical: 5,
  },
  body: {
    fontSize: 11,
    color: "dimgray",
  },
  tag: {
    backgroundColor: "#e1ecf4",
    color: "#39739d",
    padding: 5,
    borderRadius: 3,
    overflow: "hidden",
    fontSize: 12,
    alignItems: "center",
  },
  tags: { flexDirection: "row", flexWrap: "wrap", gap: 5, marginTop: 10 },
  time: {
    marginLeft: "auto",
    fontSize: 12,
    color: "dimgray",
  },
})
