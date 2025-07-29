import React, { useState } from 'react';

function PartyForm() {
  const [formData, setFormData] = useState({
    partyName: '',
    partyAddress: '',
    relationDate: '',
    contactPerson: '',
    phoneNumber: '',
    relationStatus: '',
    relationType: '',
    noa: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      partyName: '',
      partyAddress: '',
      relationDate: '',
      contactPerson: '',
      phoneNumber: '',
      relationStatus: '',
      relationType: '',
      noa: '',
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Party Information Form
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-1">Party Name</label>
          <input
            type="text"
            name="partyName"
            value={formData.partyName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Party Address</label>
          <textarea
            name="partyAddress"
            value={formData.partyAddress}
            onChange={handleChange}
            rows={2}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Relation Date</label>
          <input
            type="date"
            name="relationDate"
            value={formData.relationDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Contact Person</label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Relation Status</label>
          <input
            type="text"
            name="relationStatus"
            value={formData.relationStatus}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Relation Type</label>
          <input
            type="text"
            name="relationType"
            value={formData.relationType}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">NOA</label>
          <input
            type="number"
            name="noa"
            value={formData.noa}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="md:col-span-2 flex justify-end gap-4 mt-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default PartyForm;
