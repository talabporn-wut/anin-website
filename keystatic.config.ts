import { config, fields, collection } from "@keystatic/core"
import { browseCategories, careCategories } from "./content/articles"

export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: { name: "ANIN Pharmacy" },
  },
  collections: {
    articles: collection({
      label: "บทความ",
      slugField: "title",
      path: "content/articles/*",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "status", "updatedAt"],
      schema: {
        title: fields.slug({
          name: {
            label: "หัวข้อบทความ",
            validation: { isRequired: true },
          },
          slug: {
            label: "URL ของบทความ (ภาษาอังกฤษ)",
            description:
              "ใช้ตัวอักษรภาษาอังกฤษพิมพ์เล็ก ตัวเลข และขีด (-) เท่านั้น เช่น fever-in-children",
            validation: {
              length: { min: 1 },
              pattern: {
                regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                message: "ใช้ได้เฉพาะ a-z, 0-9 และขีด (-) เช่น fever-in-children",
              },
            },
          },
        }),
        excerpt: fields.text({
          label: "สรุปสั้น",
          description: "1–2 ประโยค แสดงในการ์ดบทความและผลการค้นหา Google",
          multiline: true,
          validation: { isRequired: true, length: { max: 200 } },
        }),
        coverImage: fields.image({
          label: "รูปปก",
          description: "แนะนำขนาด 1200×630 px",
          directory: "public/images/articles",
          publicPath: "/images/articles/",
        }),
        category: fields.select({
          label: "หมวดหมู่",
          options: browseCategories.map((c) => ({ label: c.title, value: c.title })),
          defaultValue: browseCategories[0].title,
        }),
        audience: fields.multiselect({
          label: "กลุ่มผู้อ่าน (ไม่บังคับ)",
          options: careCategories.map((c) => ({ label: c.title, value: c.title })),
          defaultValue: [],
        }),
        tags: fields.array(fields.text({ label: "แท็ก" }), {
          label: "แท็ก (ใช้ในการค้นหา)",
          itemLabel: (props) => props.value || "แท็กใหม่",
        }),
        reviewedBy: fields.text({
          label: "เภสัชกรผู้ตรวจสอบ",
          description: "เช่น ภก. สมชาย ใจดี",
          validation: { isRequired: true },
        }),
        status: fields.select({
          label: "สถานะ",
          description: "บทความจะแสดงบนเว็บเมื่อเลือก “เผยแพร่” เท่านั้น",
          options: [
            { label: "ฉบับร่าง", value: "draft" },
            { label: "เผยแพร่", value: "published" },
          ],
          defaultValue: "draft",
        }),
        publishedAt: fields.date({
          label: "วันที่เผยแพร่",
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        updatedAt: fields.date({
          label: "วันที่อัปเดตล่าสุด",
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        content: fields.mdx({
          label: "เนื้อหา",
          options: {
            heading: [2, 3],
            bold: true,
            italic: true,
            orderedList: true,
            unorderedList: true,
            link: true,
            blockquote: true,
            table: false,
            codeBlock: false,
            code: false,
            image: {
              directory: "public/images/articles",
              publicPath: "/images/articles/",
            },
          },
        }),
      },
    }),
  },
})
