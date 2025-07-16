import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { removeAccents } from "@/utils/removeAccents";

const staggerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export default function NewsList(props: any) {
  const [selected, setSelected] = useState(null);
  const { restaurantData, dataLoading } = props;

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className="pt-20 pb-0 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          key={restaurantData?.news?.length}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {restaurantData?.news
            ?.filter((data) => data.visible)
            .reverse()
            .map((item, i) => {
              const imgSrc = item.image || "/img/logo-dark.png";

              return (
                <motion.div key={i} variants={itemAnimation} className="h-full">
                  <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none bg-bourrasque-cream">
                    <div className="relative h-64">
                      <img
                        src={imgSrc}
                        alt={item.title}
                        className={`w-full h-full ${
                          item.image ? "object-cover" : "object-contain px-12"
                        }`}
                      />
                    </div>
                    <CardContent className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between gap-6 mb-4">
                          <h3 className="text-2xl tracking-wider font-bold mb-2 font-haarlem">
                            {removeAccents(item?.title)}
                          </h3>

                          <span className="text-sm text-bourrasque-green font-poiret whitespace-nowrap h-[32px] flex items-center">
                            {formatDate(item.published_at)}
                          </span>
                        </div>
                        <p
                          className="text-bourrasque-green font-poiret text-lg font-bold mb-4"
                          dangerouslySetInnerHTML={{
                            __html: item?.description?.slice(0, 50) + "…",
                          }}
                        />
                      </div>

                      <div>
                        <Separator className="my-4" />
                        <button
                          onClick={() => setSelected(item)}
                          className="text-bourrasque-orange font-poiret text-xl font-semibold hover:underline"
                        >
                          En savoir +
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
        </motion.div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-bourrasque-cream rounded-2xl shadow-xl max-w-3xl w-full mx-4 overflow-hidden flex flex-col max-h-[75vh]"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b flex-shrink-0">
              <h2 className="text-3xl font-bold tracking-wider font-haarlem">
                {removeAccents(selected.title)}
              </h2>

              <button
                onClick={() => setSelected(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            {/* Body */}
            <div className="p-6 space-y-4 overflow-y-auto">
              <div className="font-poiret text-sm text-gray-500">
                {formatDate(selected.published_at)}
              </div>

              <img
                src={selected.image || "/img/logo-dark.png"}
                alt={selected.title}
                className="w-full object-contain rounded-lg"
              />

              <p
                className="font-poiret font-bold text-xl text-bourrasque-green"
                dangerouslySetInnerHTML={{
                  __html: selected.description,
                }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
