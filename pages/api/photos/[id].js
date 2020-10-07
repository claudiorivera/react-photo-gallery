import Photo from "../../../models/Photo";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  switch (req.method) {
    case "PUT":
      try {
        const photo = await Photo.findOneAndUpdate(
          { _id: req.query.id },
          { $inc: { likes: 1 } },
          { new: true }
        );
        if (!photo) return res.status(400).json({ success: false });
        res.status(200).json(photo);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["PUT"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
