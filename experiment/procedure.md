## Procedure

#### Whole Genome Sequencing (WGS) involves several key steps, from sample preparation to data analysis:

1. Sample Preparation
DNA Extraction: Isolate high-quality genomic DNA from the sample (e.g., blood, tissue, or bacterial culture). Quality Control (QC): Assess DNA integrity and concentration using spectrophotometry (NanoDrop), fluorometry (Qubit), and electrophoresis (Bioanalyzer).

2. Library Preparation
Fragmentation: Shear DNA into smaller fragments (~150–500 bp) using enzymatic digestion or sonication.
End Repair & A-Tailing: Convert DNA ends to blunt ends and add adenine (A) overhangs for adapter ligation.
Adapter Ligation: Attach sequencing adapters to the DNA fragments.
Size Selection & Cleanup: Purify and select fragments of desired size using bead-based methods.
PCR Amplification (if needed): Amplify libraries to ensure sufficient material for sequencing.

3. Sequencing
Loading the Library: Prepare and load the library onto the sequencing platform (e.g., Illumina, PacBio, Oxford Nanopore).
Sequencing Run: Generate raw reads using next-generation sequencing (NGS) or third-generation sequencing (long-read sequencing).

4. Data Processing & Quality Control
Base Calling: Convert raw sequencing signals into nucleotide sequences.
Quality Control (QC): Assess read quality using tools like FastQC [https://www.bioinformatics.babraham.ac.uk/projects/fastqc/](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/)  (Bioinformatic tools for high throughput sequence data.).
Trimming & Filtering: Remove low-quality bases, sequencing adapters, and artifacts.

5. Genome Assembly & Alignment
Reference-Based Alignment: Map reads to a reference genome using tools like BWA or Bowtie2.
De Novo Assembly (if no reference is available): Assemble the genome using tools like SPAdes (Genome assembly tool [https://github.com/ablab/spades](https://github.com/ablab/spades)) or Canu (Genome assembly tool  [https://canu.readthedocs.io/en/latest/index.html](https://canu.readthedocs.io/en/latest/index.html)). 

6. Variant Calling & Annotation
SNP & Indel Detection: Identify genetic variants using tools like GATK (Genome Analysis ToolKit [https://gatk.broadinstitute.org/hc/en-us](https://gatk.broadinstitute.org/hc/en-us))  or FreeBayes [https://github.com/freebayes/freebayes](https://github.com/freebayes/freebayes)  (Bioinformatics tools and softwares).
Structural Variants & Copy Number Variations (CNVs): Detect larger genomic alterations using tools like Manta or CNVnator.
Functional Annotation: Assign biological significance to variants using databases like ClinVar [https://www.ncbi.nlm.nih.gov/clinvar/](https://www.ncbi.nlm.nih.gov/clinvar/) or Ensembl [https://asia.ensembl.org/index.html](https://asia.ensembl.org/index.html) (Bioinformatics database and softwares).

7. Data Interpretation & Reporting
Comparative Genomics: Compare the genome with other species or populations.
Functional Analysis: Identify genes and pathways affected by variants.
Report Generation: Summarize findings for clinical, research, or industrial applications


#### Advantages of whole-genome sequencing
- Provides a high-resolution, base-by-base view of the genome
- Captures both large and small variants that might be missed with targeted approaches
- Identifies potential causative variants for further follow-up studies of gene expression and regulation mechanisms
- Delivers large volumes of data in a short amount of time to support assembly of novel genomes

Here is a brief example of a genome sequencing of an organism performed on the NGS Illumina platform:

**Step 1:** Sample Preparation - Extraction of genomic DNA by a slightly modified CTAB (cetyltrimethylammonium bromide) method as described by Doyle and Doyle (1990).  The integrity (260nm/280nm ratio) and concentration (in ng/µl) of the extracted DNA was checked and verified by spectrophotometry (Nanodrop).  
**Step 2:** Library Preparation – The genomic DNA was digested into smaller fragments (~150 – 500 bp) by the action of restriction enzymes. DNA sequencing adapters were ligated at the ends of the DNA fragments. The DNA fragments were purified and the fragments of desired size were selected by bead-based methods.   
**Step 3:** Library loading and sequencing run – The DNA libraries were loaded onto the Illumina sequencing platform and the raw short reads were generated. The samples were sequenced using a 2 × 150 bp chemistry. The sample generated a raw data of 7.74 gb.   
**Step 4:** Data Processing & Quality Control – The sequenced raw data of sample was processed to obtain high quality clean reads using Trimmomatic v0.39 to remove adapter sequences, ambiguous reads (reads with unknown nucleotides "N" larger than 5%), and low-quality sequences (reads with more than 10% quality threshold (QV) < 25 phred score). The size of the processed data was 6.70 gb.  
**Step 5:** De novo genome assembly – The filtered high-quality reads of sample was assembled into scaffolds using SPAdes assembler (v-3.15.3). Further refinement was performed using SSPACE tool along with GapCloser for filling the gaps within the draft genome. 1979 scaffolds were generated with an average scaffold length of 17,553 bp.  
**Step 6:** Gene prediction and annotation – Genes were predicted from the sample using the software AUGUSTUS-3.2.1. A total of 6559 genes were predicted out of which 6122 genes had BLAST hits in NCBI non redundant protein database.  
