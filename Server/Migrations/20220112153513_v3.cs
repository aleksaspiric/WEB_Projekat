using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class v3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FilmGlumac");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FilmGlumac",
                columns: table => new
                {
                    FilmId = table.Column<int>(type: "int", nullable: false),
                    GlumciId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FilmGlumac", x => new { x.FilmId, x.GlumciId });
                    table.ForeignKey(
                        name: "FK_FilmGlumac_Film_FilmId",
                        column: x => x.FilmId,
                        principalTable: "Film",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FilmGlumac_Glumci_GlumciId",
                        column: x => x.GlumciId,
                        principalTable: "Glumci",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FilmGlumac_GlumciId",
                table: "FilmGlumac",
                column: "GlumciId");
        }
    }
}
