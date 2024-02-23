import React, { useState } from 'react';

const PageForm = (props: { description: any; title: any; layout: any; }) => {
  const [description, setDescription] = useState(props.description || '');
  const [title, setTitle] = useState(props.title || '');
  const [layout, setLayout] = useState(props.layout || '');
  const possibleLayouts = ["Layout1", "Layout2", "Layout3"]; // Replace with your actual layout options

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, title, layout }),
      });

      if (response.ok) {
        // Handle successful response, e.g., show a success message or redirect
        console.log('Form submitted successfully!');
      } else {
        // Handle error response, e.g., show an error message
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error: any) {
      console.error('Error submitting form:', error?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col p-2">
        <label htmlFor="description">Description</label>
        <input
          className="p-1 border border-slate-700"
          name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="title">Title</label>
        <input
          className="p-1 border border-slate-700"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="layout">Layout</label>
        <select
          className="p-1 border border-slate-700"
          name="layout"
          value={layout}
          onChange={(e) => setLayout(e.target.value)}
        >
          {possibleLayouts.map((layout) => (
            <option key={layout} value={layout}>
              {layout}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default PageForm;
