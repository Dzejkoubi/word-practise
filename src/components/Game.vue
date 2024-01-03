<template>
  <div class="page">
    <h1>Word Translation Game</h1>
    <p>Translate this word: {{ currentWord }}</p>
    <p v-if="currentHint">Hint: {{ currentHint }}</p>
    <input v-model="userInput" placeholder="Enter translation here" />
    <button @click="checkAnswer">Check Answer</button>
    <p v-if="feedback">{{ feedback }}</p>
  </div>
</template>

<script>
import words from "../assets/words.json";

export default {
  data() {
    return {
      currentWord: "",
      currentHint: "",
      userInput: "",
      feedback: "",
      wordPair: {},
    };
  },
  created() {
    this.selectRandomWord();
  },
  methods: {
    selectRandomWord() {
      const randomIndex = Math.floor(Math.random() * words.length);
      this.wordPair = words[randomIndex];
      this.currentWord =
        Math.random() < 0.5 ? this.wordPair.english[0] : this.wordPair.czech[0];
      this.currentHint = this.wordPair.hint ? this.wordPair.hint[0] : "";
    },
    checkAnswer() {
      const correctAnswer =
        this.currentWord === this.wordPair.english[0]
          ? this.wordPair.czech
          : this.wordPair.english;
      const normalizedUserInput = this.normalizeString(this.userInput);
      const normalizedCorrectAnswer = correctAnswer.map((ans) =>
        this.normalizeString(ans)
      );

      if (normalizedCorrectAnswer.includes(normalizedUserInput)) {
        this.feedback = "Correct!";
      } else {
        this.feedback = "Incorrect, try again.";
      }
      this.userInput = "";
      this.selectRandomWord(); // Select a new word for the next round
    },
    normalizeString(str) {
      return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    },
  },
};
</script>

<style></style>
