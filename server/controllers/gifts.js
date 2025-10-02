import { pool } from "../config/database.js";

const getGifts = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM gifts ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getGiftById = async (req, res) => {
  try {
    const giftId = req.params.giftId;
    const selectQuery = "SELECT * FROM gifts WHERE id = $1";
    const results = await pool.query(selectQuery, [giftId]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// The fix is here. We are ensuring both functions are exported.
export default {
  getGifts,
  getGiftById,
};
