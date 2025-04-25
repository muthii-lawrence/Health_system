const supabase = require("../supabaseClient");

exports.registerClient = async (req, res) => {
  const { full_name, age, gender } = req.body;
  const { data, error } = await supabase
    .from("clients")
    .insert([{ full_name, age, gender }]);
  if (error) return res.status(400).json({ error });
  res.json(data);
};

exports.listClients = async (req, res) => {
  const { data, error } = await supabase.from("clients").select("*");
  if (error) return res.status(500).json({ error });
  res.json(data);
};

exports.getClientProfile = async (req, res) => {
  const { id } = req.params;
  const { data: client, error: clientError } = await supabase
    .from("clients")
    .select("*")
    .eq("id", id)
    .single();
  if (clientError) return res.status(404).json({ error: "Client not found" });

  const { data: enrollments, error: enrollmentError } = await supabase
    .from("enrollments")
    .select("programs(name)")
    .eq("client_id", id);

  if (enrollmentError) return res.status(500).json({ error: enrollmentError });
  res.json({ ...client, programs: enrollments.map((e) => e.programs.name) });
};

exports.getPublicClientProfile = async (req, res) => {
  const { id } = req.params;
  const { data: client, error: clientError } = await supabase
    .from("clients")
    .select("*")
    .eq("id", id)
    .single();
  if (clientError) return res.status(404).json({ error: "Client not found" });

  const { data: enrollments, error: enrollmentError } = await supabase
    .from("enrollments")
    .select("programs(name)")
    .eq("client_id", id);

  if (enrollmentError) return res.status(500).json({ error: enrollmentError });
  res.json({ ...client, programs: enrollments.map((e) => e.programs.name) });
};
