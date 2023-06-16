import { View, Text, StyleSheet } from "react-native"
import React from "react"

export default function QuestionListItem({ Question }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {Question.score} votes • 2 {Question.answer_count} •{" "}
        {Question.view_count} views
      </Text>
      <Text style={styles.title}>{Question.title}</Text>
      <Text numberOfLines={2} style={styles.body}>
        {Question.body_markdown}
      </Text>
      <View style={styles.tags}>
        {Question.tags.map((tag) => (
          <Text style={styles.tag} key={tag}>
            {tag}
          </Text>
        ))}
        <Text style={styles.time}>
          asked {new Date(Question.creation_date).toDateString()}
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
