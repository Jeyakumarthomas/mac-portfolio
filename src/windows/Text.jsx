import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';
import useWindowStore from '#store/window';

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-4 space-y-4">
        {image && (
          <div className="flex items-center gap-4">
            <img src={image} alt={name} className="w-16 h-16 object-cover rounded-md" />
            {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
          </div>
        )}

        {!image && subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}

        {Array.isArray(description) && description.map((para, idx) => (
          <p key={idx} className="text-sm text-gray-700 leading-relaxed">{para}</p>
        ))}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
