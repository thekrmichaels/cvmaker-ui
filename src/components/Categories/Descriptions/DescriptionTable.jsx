import { useEffect } from "react";
import DescriptionForm from "./DescriptionForm";
import useResource from "../../../hooks/useResource";

export default function DescriptionTable() {
  const resource = "descriptions";
  const {
    categoryData,
    categoryId,
    handleAdd,
    handleCancel,
    handleCreate,
    handleDelete,
    handleEdit,
    handleRead,
    handleUpdate,
    isAddFormVisible,
    isEditFormVisible,
  } = useResource();

  useEffect(() => {
    handleRead(resource);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryData]);

  return (
    <>
      <button onClick={handleAdd}>Add</button>

      {isAddFormVisible && (
        <DescriptionForm
          onSave={(values) => handleCreate(resource, values)}
          onCancel={handleCancel}
          defaultValue={categoryId !== null ? categoryData[categoryId] : null}
        />
      )}

      <table>
        <thead>
          <tr>
            <th>Content</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((category, id) => (
            <tr key={`row-${id}`}>
              <td>
                {id === categoryId && isEditFormVisible ? (
                  <DescriptionForm
                    onSave={(values) => handleUpdate(id, resource, values)}
                    onCancel={handleCancel}
                    defaultValue={category}
                  />
                ) : (
                  category.content
                )}
              </td>
              <td>
                {id === categoryId && isEditFormVisible ? null : (
                  <>
                    <button onClick={() => handleEdit(id)}>Edit</button>
                    <button
                      onClick={() => handleDelete(id, resource, category.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
