import Photo from "../../../models/Photo";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const photos = await Photo.find({});
        if (!photos) return res.status(400).json({ success: false });
        res.status(200).json(photos);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
