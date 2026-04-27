import { useState, useEffect, Children } from "react";

const Modal = ({text, onConfirm, title, textbitton, children }) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [open]);

  return (
    <div className=" flex items-center justify-center p-6 ">
      {/* <button
        onClick={() => setOpen(true)}
        className="  border-2 border-black rounded-8 p-[20px] hover:cursor-pointer shadow-lg hover:opacity-90 transition py-[10px] px-[20px] "
      >
        {textbitton}
      </button> */}
      <p onClick={() => setOpen(true)} className="hover:cursor-pointer">{text}</p>

      {visible && (
        <div className="font-Vazir fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={() => setOpen(false)}
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          <div
            className={`relative bg-white w-full max-w-[600px] m-[20px] rounded-2xl shadow-2xl  p-[20px] transform transition-all  duration-200 ${
              open
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold p-[20px]">{title}</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black transition"
              >
                ✕
              </button>
            </div>
            {children}

            <div className="flex-center gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="py-[10px] px-[20px] rounded-xl border border-gray-300 hover:bg-gray-100 transition cursor-pointer font-bold"
              >
                متوجه شدم
              </button>
              {textbitton && (
                <button
                  onClick={() => {
                    onConfirm();
                    setOpen(false);
                  }}
                  className="py-[10px] px-[20px] rounded-xl bg-black text-white hover:opacity-90 transition cursor-pointer"
                >
                  {textbitton}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Modal;
