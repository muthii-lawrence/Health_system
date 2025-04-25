const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://rojuahxsijhbgcagsgzy.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvanVhaHhzaWpoYmdjYWdzZ3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MTgwNjAsImV4cCI6MjA2MTE5NDA2MH0.bDkPFjdlT38h6Q7yA-jPT-zzoSaV7Px3yp2J4u7NO-g";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;
