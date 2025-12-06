import React, { useState } from 'react';

const BudgetTracker = () => {
  const [transactions, setTransactions] = useState([
    
  ]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const total = transactions.reduce((acc, item) => acc + item.amount, 0);

  const addTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount 
    };
    setTransactions([...transactions, newTransaction]);
    setText("");
    setAmount(0);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-slate-900 rounded-xl border border-slate-700 text-slate-200">
      <h2 className="text-xl font-bold text-center mb-4">Dompet Saya</h2>
      
      <div className="text-center mb-6">
        <h1 className={`text-4xl font-bold ${total >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
          Rp {total.toLocaleString('id-ID')}
        </h1>
        <p className="text-sm text-slate-400">Total Saldo</p>
      </div>

      <div className="mb-6">
        <h3 className="border-b border-slate-700 pb-2 mb-3 text-sm uppercase tracking-wider text-slate-400">Riwayat</h3>
        <ul className="space-y-2 max-h-40 overflow-y-auto">
          {transactions.map(t => (
            <li key={t.id} className="flex justify-between bg-slate-800 p-3 rounded border-r-4 border-slate-700"
                style={{ borderRightColor: t.amount < 0 ? '#f87171' : '#34d399' }}>
              <span>{t.text}</span>
              <span>{t.amount < 0 ? '-' : '+'}Rp {Math.abs(t.amount).toLocaleString('id-ID')}</span>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={addTransaction} className="space-y-3">
        <div>
          <label className="block text-xs mb-1">Keterangan</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-full bg-slate-800 rounded p-2 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Cth: Gaji" />
        </div>
        <div>
          <label className="block text-xs mb-1">Jumlah (Negatif = Pengeluaran)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-slate-800 rounded p-2 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Cth: -50000" />
        </div>
        <button className="w-full bg-emerald-600 hover:bg-emerald-500 py-2 rounded font-bold transition">Tambah Transaksi</button>
      </form>
    </div>
  );
};

export default BudgetTracker;