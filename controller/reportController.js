const Report = require("../models/report");

const createReport = async (req, res) => {
    try {
        const { titulo, conteudo, peritoResponsavel } = req.body;
        const newReport = new Report({ titulo, conteudo, peritoResponsavel });
        await newReport.save();
        res.status(201).json(newReport);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getReports = async (req, res) => {
    try {
        const reports = await Report.find();
        res.status(200).json(reports);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getReportById = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        if (!report) {
            return res.status(404).json({ message: "Relatório nao encontrado" });
        }
        res.status(200).json(report);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateReport = async (req, res) => {
    try {
        const { id } = req.params.id;
        const { titulo, conteudo, peritoResponsavel } = req.body;
        const updatedReport = await Report.findByIdAndUpdate(
            id,
            { titulo, conteudo, peritoResponsavel },
            { new: true }
        );
        if (!updatedReport) {
            return res.status(404).json({ message: "Relatório nao encontrado" });
        }
        res.status(200).json(updatedReport);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteReport = async (req, res) => {
    try {
        const { id } = req.params.id;
        const deletedReport = await Report.findByIdAndDelete(id);
        if (!deletedReport) {
            return res.status(404).json({ message: "Relatório nao encontrado" });
        }
        res.status(200).json({ message: "Relatório excluido" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { createReport, getReports, getReportById, updateReport, deleteReport };