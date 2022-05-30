import { Link } from 'react-router-dom';

export default function SideBarLink(properties) {
  const { children, ...restProperties } = properties;

  return (
    <Link {...restProperties}>
      <div
        className="px-3 py-3
                  block
                  text-xs
                  font-semi
                  dark:text-white
                  dark:hover:(bg-gray-100/[0.1])
                  dark:focus:bg-gray-600
                  dark:focus:text-gray-100
                  dark:hover:text-gray-200
                  hover:text-gray-500
                  focus:text-gray-400
                  hover:(bg-gray-100/[0.1])
                  focus:bg-gray-200
                  focus:outline-none
                  focus:shadow-outline"
      >
        <div className="flex flex-col items-center hover:translate-x-1 mt-2 transform transition-transform ease-in duration-200 opacity-100">
          {properties.children}
        </div>
      </div>
    </Link>
  );
}
