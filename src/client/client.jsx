import axios from "axios";

const client = axios.create({
  baseURL: "https://rznwpsuxlrxtfpnirdmr.supabase.co",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6bndwc3V4bHJ4dGZwbmlyZG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4Njc5NjMsImV4cCI6MjAzODQ0Mzk2M30.8JDpa38gI-zeeIlTZRht4z9TfybO4PYW0U9YLKs1Fo0",
  },
});

export default client;
