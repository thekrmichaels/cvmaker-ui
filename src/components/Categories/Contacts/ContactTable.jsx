import { useEffect } from "react";
import ContactForm from "./ContactForm";
import useResource from "../../../hooks/useResource";

export default function ContactTable() {
  const resource = "contacts";
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
        <ContactForm
          onSave={(values) => handleCreate(resource, values)}
          onCancel={handleCancel}
          defaultValue={categoryId !== null ? categoryData[categoryId] : null}
        />
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Content</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((category, id) => (
            <tr key={`row-${id}`}>
              {id === categoryId && isEditFormVisible ? (
                <td colSpan="3">
                  <ContactForm
                    onSave={(values) => handleUpdate(id, resource, values)}
                    onCancel={handleCancel}
                    defaultValue={category}
                  />
                </td>
              ) : (
                <>
                  <td>{category.name}</td>
                  <td>{category.content}</td>
                  <td>
                    <button onClick={() => handleEdit(id)}>Edit</button>
                    <button
                      onClick={() => handleDelete(id, resource, category.id)}
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
