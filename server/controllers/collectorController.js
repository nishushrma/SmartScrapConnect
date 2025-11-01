import User from "../models/User.js";

// GET /api/collectors?location=<text>
export const listCollectors = async (req, res) => {
  try {
    const { location } = req.query;
    const filter = { role: "collector" };

    if (location && location.trim()) {
      // case-insensitive partial match on location or name or email
      const rx = new RegExp(location.trim(), "i");
      filter.$or = [{ location: rx }, { name: rx }, { email: rx }];
    }

    const collectors = await User.find(filter)
      .select("name email phone location createdAt")
      .sort({ createdAt: -1 });

    res.json({ count: collectors.length, data: collectors });
  } catch (err) {
    console.error("Collectors list error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
