<template>
  <div class="bg-blue-background py-60">
  <div class="container mx-auto px-4 mt-[60vh]">
    <div class="flex flex-col gap-8">
      
      <!-- Computer Types Section -->
      <section>
        <h1 class="text-4xl font-bold text-white mb-8">ประเภทของคอมพิวเตอร์</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(type, index) in computerTypes"
            :key="type.title"
            class="bg-white rounded-xl border border-zinc-200 shadow-lg overflow-hidden flex flex-col"
          >
            <img
              :src="type.image"
              :alt="type.title"
              class="w-full h-48 object-cover"
              loading="lazy"
            />
            <div class="p-6 flex-1 flex flex-col">
              <h2 class="text-2xl font-semibold text-slate-800 mb-4">{{ type.title }}</h2>
              <p class="text-xl text-slate-500 flex-1">{{ type.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section>
        <h2 class="text-4xl font-bold text-white mb-8">ประโยชน์</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <BenefitCard
  v-for="benefit in benefits"
  :key="benefit.title"
  :icon="benefit.icon"
  :title="benefit.title"
/>
        </div>
      </section>

      <!-- Statistics Section -->
<section>
  <h2 class="text-4xl font-bold text-white mb-8">สถิติน่าสนใจเกี่ยวกับคอมพิวเตอร์</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <StatisticCard
      v-for="stat in statistics"
      :key="stat.title"
      :title="stat.title"
      :content="stat.content"
      :icon="stat.icon"
    />
  </div>
</section>

      <!-- Companies Section -->
 <!-- Companies Section -->
<section style="margin-bottom: 200px;">
  <h2 class="text-4xl font-bold text-white mb-8">บริษัทที่เกี่ยวข้อง</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">
    <CompanyCard
      v-for="company in companies"
      :key="company.id"
      :logo="company.logoUrl"
      :name="company.name"
      :products="company.products"
      :highlight="company.highlights"
    />
  </div>
</section>

    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import BenefitCard from "../components/BenefitCard.vue";
import StatisticCard from "../components/StatisticCard.vue";
import CompanyCard from "../components/CompanyCard.vue";

// Combined Computer Types Array
const computerTypes = ref([
  {
    title: "คอมพิวเตอร์ตั้งโต๊ะ",
    image:
      "https://i2.wp.com/www.iurban.in.th/wp-content/uploads/2019/06/192545882682-content1-1.jpg?ssl=1",
    description: "ใช้ในสำนักงานหรือบ้านสำหรับงานทั่วไป",
  },
  {
    title: "คอมพิวเตอร์พกพา",
    image:
      "https://image.made-in-china.com/202f0j00UoAcjnvBiwbH/2-5K-Laptop-2-in-1-Tablet-14-Inch-Portable-Computer-2-0MP-Camera-Study-PC.webp",
    description: "มีความคล่องตัวและใช้งานได้หลากหลาย",
  },
  {
    title: "เซิร์ฟเวอร์",
    image:
      "https://addin.co.th/blog/wp-content/uploads/2020/12/article-knowledge-what-is-server-two.jpg",
    description: "ใช้ในองค์กรขนาดใหญ่ เช่น ธนาคาร เพื่อจัดการข้อมูลจำนวนมาก",
  },
  {
    title: "ซูเปอร์คอมพิวเตอร์",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/IBM_Blue_Gene_P_supercomputer.jpg/1200px-IBM_Blue_Gene_P_supercomputer.jpg",
    description:
      "ใช้ในงานวิจัยทางวิทยาศาสตร์ที่ต้องการการคำนวณระดับสูง เช่น การพยากรณ์อากาศ",
  },
  {
    title: "สมาร์ทโฟนและแท็บเล็ต",
    image:
      "https://s359.kapook.com/pagebuilder/1757dff1-868d-4761-a602-df4ee3981e53.jpg",
    description: "อุปกรณ์ขนาดเล็กที่มีความสามารถเทียบเท่าคอมพิวเตอร์",
  },
]);

// Existing Data
const benefits = ref([
  {
    icon: "https://api.iconify.design/mdi:briefcase.svg",
    title: "ด้านการทำงาน",
  },
  {
    icon: "https://api.iconify.design/mdi:flask.svg",
    title: "ด้านวิทยาศาสตร์และการวิจัย",
  },
  {
    icon: "https://api.iconify.design/mdi:school.svg",
    title: "ด้านการศึกษา",
  },
  {
    icon: "https://api.iconify.design/mdi:film.svg",
    title: "ด้านความบันเทิง",
  },
  {
    icon: "https://api.iconify.design/mdi:business.svg",
    title: "ด้านธุรกิจ",
  },
  {
    icon: "https://api.iconify.design/mdi:comment.svg",
    title: "ด้านการสื่อสาร",
  },
]);

const statistics = ref([
  {
    title: "การเพิ่มขึ้นของผู้ใช้อินเทอร์เน็ตทั่วโลก",
    content:
      "ปัจจุบัน (ข้อมูลปี 2024) มีผู้ใช้อินเทอร์เน็ตทั่วโลกมากกว่า 5.18 พันล้านคน คิดเป็นประมาณ 65% ของประชากรโลก",
    icon: "fas fa-globe" // Globe icon
  },
  {
    title: "จำนวนคอมพิวเตอร์ที่ใช้งานในปัจจุบัน",
    content:
      "มีคอมพิวเตอร์ที่ใช้งานอยู่ทั่วโลกมากกว่า 2 พันล้านเครื่อง แบ่งเป็นคอมพิวเตอร์ตั้งโต๊ะ (Desktop) และคอมพิวเตอร์พกพา (Laptop)",
    icon: "fas fa-desktop" // Desktop icon
  },
  {
    title: "ตลาดเกม PC และความนิยมของคอมพิวเตอร์ในอุตสาหกรรมเกม",
    content:
      "ตลาดเกม PC มีมูลค่ามากกว่า 40 พันล้านดอลลาร์สหรัฐ (ประมาณ 1.4 ล้านล้านบาท) และคาดว่าจะเติบโตเฉลี่ย 7.5% ต่อปี",
    icon: "fas fa-gamepad" // Gamepad icon
  },
  {
    title: "การเติบโตของข้อมูล (Data Growth)",
    content:
      "ในปี 2024 ข้อมูลที่ถูกสร้างและจัดเก็บบนคอมพิวเตอร์มีปริมาณมากกว่า 120 เซตตาไบต์ (ZB)",
    icon: "fas fa-database" // Database icon
  },
]);

const companies = ref([
  {
    id: 1,
    name: "Apple Inc.",
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/167f8969fc9e4702b2c941ecb34dd7f8/8249a809cb8a0c17f03c1a9d848d54592db3d3a215b1df03dcb664338d0665c7?apiKey=167f8969fc9e4702b2c941ecb34dd7f8&",
    products: "MacBook, iMac, iPad",
    highlights: "การออกแบบที่ทันสมัยและระบบนิเวศ (Ecosystem) ที่เชื่อมโยงกัน",
  },
  {
    id: 2,
    name: "Dell Technologies",
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/167f8969fc9e4702b2c941ecb34dd7f8/4e699f3bb0d722160e9f91f136305d95ecf6ec019917cb313b70f7790afca498?apiKey=167f8969fc9e4702b2c941ecb34dd7f8&",
    products: "คอมพิวเตอร์ตั้งโต๊ะและโน้ตบุ๊กสำหรับธุรกิจและผู้ใช้งานทั่วไป",
    highlights: "ความหลากหลายในกลุ่มสินค้าและบริการหลังการขาย",
  },
  {
    id: 3,
    name: "NVIDIA",
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/167f8969fc9e4702b2c941ecb34dd7f8/297e4d933f4824ce06b5b5e87d7c2ae4397ae4fb15940fab0f261a1b6f2ff402?apiKey=167f8969fc9e4702b2c941ecb34dd7f8&",
    products: "การ์ดจอ (GPU), ชิป AI",
    highlights: "การเป็นผู้นำด้านเทคโนโลยีกราฟิกและ AI",
  },
  {
    id: 4,
    name: "Intel Corporation",
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/167f8969fc9e4702b2c941ecb34dd7f8/a3bb05a4dbb02f89130d0e3b513362058e709ee5957b81023f7220b4367cbd79?apiKey=167f8969fc9e4702b2c941ecb34dd7f8&",
    products: "หน่วยประมวลผล (CPU), ชิปเซ็ต",
    highlights: "การพัฒนาชิปที่ขับเคลื่อนคอมพิวเตอร์ทั่วโลก",
  },
  {
    id: 5,
    name: "Microsoft",
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/167f8969fc9e4702b2c941ecb34dd7f8/dbfa45c7565d6915bc4f273478906b83aa172cb26eeab5579bdec975ee38e30a?apiKey=167f8969fc9e4702b2c941ecb34dd7f8&",
    products: "Windows OS, Microsoft Office, Azure",
    highlights: "ระบบปฏิบัติการยอดนิยมและโซลูชันสำหรับธุรกิจ",
  },
  {
    id: 6,
    name: "Google (Alphabet Inc.)",
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/167f8969fc9e4702b2c941ecb34dd7f8/89389ed58daea75d29cac0ccfa870dca4504ba711d520e5f784e80b374f00aa6?apiKey=167f8969fc9e4702b2c941ecb34dd7f8&",
    products: "Chrome OS, Google Workspace, AI Models",
    highlights: "การให้บริการที่ครอบคลุมตั้งแต่ซอฟต์แวร์ไปจนถึงระบบคลาวด์",
  },
]);

</script>

<style scoped>
.container {
  max-width: 1200px;
}
.text-white {
  color: #ffffff;
}

.bg-blue-background {
  background-image: url('../assets/section2/blue_bg.png');
  background-size: cover; /* Adjusts the image to cover the entire container */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  background-position: center; 
}

</style>